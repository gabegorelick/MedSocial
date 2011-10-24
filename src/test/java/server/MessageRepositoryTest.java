package server;


import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.Collection;

import model.Message;

import org.junit.Before;
import org.junit.Test;

import com.googlecode.objectify.ObjectifyService;

/**
 * Tests {@link MessageRepository} class.
 *
 * @author androns
 */
public class MessageRepositoryTest extends LocalDatastoreTest {

    private MessageRepository messageRepository;

    /**
     * @see LocalDatastoreTest#setUp()
     */
    @Before
    @Override
    public void setUp() {
        super.setUp();
        this.messageRepository = new MessageRepository();
        ObjectifyService.register(Message.class);
    }

    /**
     *
     */
    @Test
    public void smokeTest() {
        assertNotNull(this.messageRepository);

        // create
        final Message message = new Message("Test message");

        this.messageRepository.create(message);

        // read
        Collection<Message> messages = this.messageRepository.getAll();

        assertNotNull(messages);
        assertEquals(1, messages.size());
        final Message storedMessage = messages.iterator().next();

        assertNotNull(storedMessage.getId());
        assertEquals(message.getText(), storedMessage.getText());

        // delete
        this.messageRepository.deleteById(storedMessage.getId());

        messages = this.messageRepository.getAll();
        assertEquals(0, messages.size());
    }
}
